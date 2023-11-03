

export const Diganos = (props) => {
    return (
        <div className="flex flex-row px-10 py-2 bg-white rounded-lg gap-4">
            <div className="bg-red-200 rounded-xl">
                he
            </div>
            <div className="space-y-4">
                <div>
                    <h1 className="font-bold text-xl">{props.testname}</h1>
                    <h1 className="text-lg font-bold text-red-600">{props.result}</h1>
                </div>
                <h1 className="text-md">{props.review}</h1>
            </div>

        </div>
    )
}
export const Pres=(props)=>{
    return(
        <div className="py-4">
            <h1 className="text-lg list-disc"><b>Medication Name: </b>{props.name}</h1>
            <h1><b>Dosage: </b>{props.dose}</h1>
            <h1><b>Adminstration: </b>{props.admin}</h1>
            <h1><b>Purpose: </b>{props.purpose}</h1>
        </div>
    )
}