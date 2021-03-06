<template>
  <div>
    <font-awesome-icon :icon="myIcon" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default {
    components: { FontAwesomeIcon },
    setup(){
        const myIcon = faSpinner
        return { myIcon }
    },
}
</script>