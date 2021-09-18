import services, { baseUrl } from "../config/fetchConfig";

export const getPlans = async (onSuccess,onError) => {
	try{
		const res = await services.Get('stripe/plans')
		if(res.status == 'success'){
			onSuccess(res)
		}
		else{
			onError(res)
		}
	}
	catch(e){
		onError(e)
		console.log('error -->',e)
	}
};
