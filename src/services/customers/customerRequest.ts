import axiosInstance from "~/lib/utils/axiosInstance";


export const customerRequest = {
    getAll: async function() {
        try {
            let url = 'customers/admin'
            let res = await axiosInstance.get(url);

            return res.data.customers;
        } catch(err) {
            console.log(err);
            return []
        }
    }
}