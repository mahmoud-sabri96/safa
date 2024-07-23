// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
// rsuite
import { DatePicker } from "rsuite";
//----------------------------------------------------------------

const RHFDatePicker = ({ name, label, ...other }) => {

    const { control } = useFormContext();

    //------- JSX Code -------
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <label className="text-sm sm:text-lg px-2 block text-primary mb-2 font-[500]">
                        {label}
                    </label>
                    <DatePicker
                        {...field}
                        value={
                            // ''
                            // null
                            // typeof field.value === "number" && field.value === 0
                            //     ? ""
                            //     :
                                field.value
                        }
                        {...other}
                    />
                    {
                        error &&
                        <p className="text-red-500 my-1 text-[14px] px-3">
                            {error?.message}
                        </p>
                    }
                </>
            )}
        />
    )
}

export default RHFDatePicker