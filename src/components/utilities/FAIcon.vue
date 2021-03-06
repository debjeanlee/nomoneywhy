<template>
  <div>
    <font-awesome-icon :icon="myIcon" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons'

export default {
    components: { FontAwesomeIcon },
    setup(){
        const myIcon = faSearchDollar
        return { myIcon }
    },
}
</script>