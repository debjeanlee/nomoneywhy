import { ref } from 'vue';

const getUser = () => {
    const user = ref('Stranger')

    const load = () => {
        if (!localStorage.name) {
            return user.value
        }
        return user.value = localStorage.name
    }
    return { user, load };
}

export default getUser