<template>
  <li 
    :class="messageOwner"
    class="message"  
  >
    {{ text }}
  </li>
</template>

<script>
export default {
  name: 'Message',
  props: {
    messageOwner: String,
    text: String
  }
}
</script>

<style>
.message {
  display: inline-block;
  clear: both;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 2px;
}

.him {
  background: #eee;
  float: left;
}

.me {
  float: right;
  background: #0084ff;
  color: #fff;
}

.him + .me{
  border-bottom-right-radius: 5px;
}

.me + .me{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.me:last-of-type {
  border-bottom-right-radius: 30px;
}
</style>