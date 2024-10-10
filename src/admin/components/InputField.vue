<template>
  <div class="input__wrapper">
    <component
      :is="textarea ? 'textarea' : 'input'"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :maxlength="maxlength"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input__field" />
    <label :for="id" class="input__label">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    modelValue: String,
    placeholder: String,
    required: Boolean,
    maxlength: Number,
    textarea: Boolean,
  },
};
</script>

<style scoped>
.input__wrapper {
  position: relative;
  padding: 1rem 0 0;
}

.input__field {
  width: 70%;
  border: 1px solid #6f7e8c;
  font-size: 1rem;
  border-radius: 0.5rem;
  color: #212121;
  padding: 0.5rem;
  padding-right: 2rem;
  background: transparent;
  transition: border-color 0.2s;
}

.input__field::placeholder {
  color: transparent;
}

.input__field:placeholder-shown ~ .input__label {
  font-size: 1rem;
  cursor: text;
  color: #6f7e8c;
  top: 1.5rem;
}

label,
.input__field:focus ~ .input__label {
  position: absolute;
  top: 0.375rem;
  padding: 0 0.25rem;
  background-color: white;
  display: block;
  font-size: 0.875rem;
  left: 0.5rem;
  color: #6f7e8c;
  transition: 0.3s;
}

.input__field:focus ~ .input__label {
  color: #007fff;
}

.input__field:focus {
  border: 1px solid #007fff;
  outline: 1px solid #007fff;
}
</style>
