import { ref, computed } from '@vue/composition-api';
import axios from 'axios';

export function useMessages() {
  const actionCount = ref(0);
  const possibleError = ref(false);
  const isShowTyping = ref(false);
  const inputValue = ref('');
  const delayBeforeSendQuestion = ref(2500);
  const botName = ref('');
  const messages = ref([]);
  const dispatchedMessages = ref([]);

  const getQuestions = () => {
    axios
    .get('messages.json')
    .then(res => messages.value = res.data)
    .catch(() => possibleError.value = true);
  };

  const askQuestion = () => {
    actionCount.value += 1;
    dispatchedMessages.value.push(messages.value[actionCount.value]);
  }

  const getBotName = () => {
    const names = ['Rachel', 'Monica', 'Phoebe', 'Ross', 'Joey', 'Chandler'];
    const randomIndex = Math.floor(Math.random() * names.length)

    botName.value = names[randomIndex];
  };

  const cleanAndStartNewChat = () => {
    dispatchedMessages.value = [];
    actionCount.value = 0;
    getBotName();
  };

  const sendMessage = () => {
    if (!dispatchedMessages.value.length) {
      isShowTyping.value = true;

      setTimeout(() => {
        isShowTyping.value = false;
        const firstMessage = { ...messages.value[dispatchedMessages.value.length], text: `Hi, I'm ${botName.value}!` }

        dispatchedMessages.value.push(firstMessage);
        
        if (!messages.value[actionCount.value].ask) {
          askQuestion()
        }
      }, delayBeforeSendQuestion.value)

    } else {
      isShowTyping.value = true;
      const answer = {
        text: inputValue.value,
        owner: 'me'
      };

      dispatchedMessages.value.push(answer);
      inputValue.value = '';

      setTimeout(() => {
        isShowTyping.value = false;
        actionCount.value += 1;

        dispatchedMessages.value.push(messages.value[actionCount.value]);

        if (!messages.value[actionCount.value].ask && !(actionCount.value + 1 === messages.value.length)) {
          askQuestion()
        }
      }, delayBeforeSendQuestion.value)
    }
  }

  const isLastMessage = computed(() => {
    return actionCount.value + 1 === messages.value.length;
  })

  const btnText = computed(() => {
    return dispatchedMessages.value.length ? 'Send Message' : 'Let\'s chat'
  });

  const isDisabledSendBtn = computed(() => {
    const isFilledInput = inputValue.value.trim() !== '';
    const areExistMessages = dispatchedMessages.value.length > 0;

    return !isFilledInput && areExistMessages;
  });

  getQuestions()

  if (!botName.value) {
    getBotName()
  }

  return {
    getBotName,
    getQuestions,
    sendMessage,
    askQuestion,
    cleanAndStartNewChat,
    botName,
    actionCount,
    possibleError,
    messages,
    dispatchedMessages,
    isLastMessage,
    isDisabledSendBtn,
    btnText,
    inputValue,
    isShowTyping
  }
}