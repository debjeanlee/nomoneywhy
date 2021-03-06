import { ref } from 'vue';

const getCategories = () => {
    const categories = ref([])
    if (!localStorage.categories) {
       const list = ['Food', 'Bills', 'Transport', 'Entertainment', 'Healthcare', 'Housing', 'Education', 'Clothes', 'Others'];
       categories.value = list
       localStorage.setItem('categories', JSON.stringify(list));
    } else {
       categories.value = JSON.parse(localStorage.categories)
    }

    return { categories };
}

export default getCategories