import { computed } from 'vue';

const getDate = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const fullDate = computed(() => {
        if (date < 10 && month < 10) {
            return `${year}-0${month}-0${date}`
        } else if (month < 10) {
            return `${year}-0${month}-${date}`
        } else if (date < 10) {
            return `${year}-${month}-0${date}`
        } else {
            return `${year}-${month}-${date}`
        }
    })

    const curMonthStr = computed(() => {
        return getMonthStr(month);
    })
     const getMonthStr = (month) => {
        switch (month) {
            case 1:
                return 'January'
            case 2:
                return 'February'
            case 3:
                return 'March'
            case 4:
                return 'April'
            case 5:
                return 'May'
            case 6:
                return 'June'
            case 7:
                return 'July'
            case 8:
                return 'August'
            case 9:
                return 'September'
            case 10:
                return 'October'
            case 11:
                return 'November'
            case 12:
                return 'December'
            default:
                break;
        }
    }

    return { date, month, year, fullDate, getMonthStr, curMonthStr };
}

export default getDate