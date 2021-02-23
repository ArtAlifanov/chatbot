
<template>
  <div class="chat">
    <error-page v-if="possibleError"/>
    <v-container 
      fluid
      v-else  
    >
      <chat-area 
        :messages="dispatchedMessages"
        :is-last-msg="isLastMessage"
        :is-show-typing="isShowTyping"
        :bot-name="botName"
        @send-message="sendMessage"
      />
      <div>
        <v-textarea
          v-model="inputValue"
          :disabled="dispatchedMessages.length === 0 || isLastMessage || isShowTyping"
          filled
          label="Type your message"
          class="mt-4"
          @keyup.enter="sendMessage"
        />
        <div class="d-flex justify-end">
          <chat-button 
            v-if="isLastMessage"
            text="Restart chat"
            @on-click="cleanAndStartNewChat"
          />
          <chat-button 
            v-else
            :disabled="isDisabledSendBtn"
            :text="btnText"
            @on-click="sendMessage"
          />

        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
//components
import ChatButton from './components/ChatButton'
import ChatArea from './components/ChatArea'
import ErrorPage from './components/ErrorPage'

//composition
import { useMessages } from '../../composition/messages';

export default {
  name: 'Chat',
  components: {
    ChatButton,
    ChatArea,
    ErrorPage,
  },
  setup() {
    return {
      ...useMessages()
    }
  },
}
</script>
