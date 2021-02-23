
<template>
  <div>
    <div 
      v-if="messages.length || isShowTyping"
      class="d-flex flex-column"  
    >
      <ul
        class="chat-area chat-area--filled"
        v-chat-scroll
        :class="{ 'chat-area--disabled': isLastMsg}"
      >
        <message
          v-for="(message, index) in messages"
          :key="index"
          :message-owner="message.owner"
          :text="message.text"
        />
      </ul>
      <vue-typed-js 
        v-if="isShowTyping"
        :start-delay="1000"
        :strings="[`${botName} is typing`]" 
        :loop="true"
        class="pl-5 chat-area__typing-action"
      >
        <span class="typing" />
      </vue-typed-js>
    </div>
    <div
      v-else
      class="chat-area chat-area--empty"
    >
      There are no messages yet
      <br>
      Please, start chat and enjoy
    </div>
    
  </div>
</template>

<script>
import Message from './Message';
import { VueTypedJs } from 'vue-typed-js'

export default {
  name: 'ChatArea',
  components: {
    Message,
    VueTypedJs
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    isLastMsg: Boolean,
    isShowTyping: {
      type: Boolean,
      default: false
    },
    botName: String
  },
}
</script>

<style>
.chat-area {
  width: 100%;
  height: 400px;
}

.chat-area--filled {
  margin-bottom: 20px;
  list-style: none;
  overflow-y: scroll;
  padding: 16px;
}

.chat-area--empty {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.38);
}

.chat-area__typing-action {
  color: rgba(0, 0, 0, 0.38);
}

.chat-area--disabled {
  background: rgba(0, 0, 0, 0.26);
}
</style>