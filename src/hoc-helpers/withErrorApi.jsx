import { useState } from "react"
import ErrorMassage from '@components/ErrorMassage'
export const withErrorApi = (View) => {

    return props => {
        const [errorApi, setErrorApi] = useState(false)
        return(
            <>
                {errorApi 
                    ? <ErrorMassage/>
                    : (
                        <View
                            setErrorApi = {setErrorApi}
                            {...props}
                        />
                    ) 
                }
            </>
        )
    }

    
}