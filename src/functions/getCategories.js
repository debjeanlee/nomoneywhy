import { ref } from 'vue';

const getCategories = () => {
    const categories = ref([])
    if (!localStorage.categories) {
       categories.value = ['Food', 'Bills', 'Transport', 'Entertainment', 'Healthcare', 'Housing', 'Education', 'Clothes', 'Others'];
    } else {
       categories.value = localStorage.categories
    }

    return { categories };
}

export default getCategories