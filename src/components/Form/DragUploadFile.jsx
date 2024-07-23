// // React-dropzone
// import { useDropzone } from "react-dropzone";
// // react-hook-form
// import { useFormContext, Controller } from "react-hook-form";
// // locales
// import useLocales from "../../locales/useLocales";
// // Icons
// import { MdAttachFile } from "react-icons/md";
// // // -----------------------------------------------------------

// export default function DragUploadFile({ name, label, setValues, ...other }) {

//     const { translate } = useLocales()

//     const { control } = useFormContext();

//     const {
//         acceptedFiles,
//         getRootProps,
//         getInputProps,
//     } = useDropzone({
//         onDrop: files => {
//             setValues(files);
//         },
//         accept: {
//             // 'image/.pdf': ['.pdf', '.docx', '.doc']
//             'image/.pdf': ['.pdf']
//         },
//         multiple: false,
//     });

//     // ----- JSX Code ------
//     return (
//         <Controller
//             name={name}
//             control={control}
//             render={({ fieldState: { error } }) => (

//                 <section >

//                     <label className="text-[16px] px-3 block text-primary mb-2 font-[500]">
//                         {label}
//                     </label>

//                     <div

//                         className="bg-white min-h-[200px] rounded-[32px] flex items-center justify-center border-[2px] border-dashed border-gray-300"
//                         {...getRootProps()}
//                     >

//                         <div>
//                             <input
//                                 {...getInputProps()}
//                                 {...other}
//                             />
//                         </div>

//                         <div className="text-center ">
//                             <span
//                                 className="flex cursor-pointer mx-auto mb-4 font-[600] text-[14px] text-primary w-[fit-content] justify-center items-center px-3 py-2 border-[1px] border-primary rounded-full">
//                                 <MdAttachFile className="rotate-45 text-lg mx-1" />
//                                 {translate('upload file')}
//                             </span>
//                             <p className="font-[600] text-center text-[14px] text-primary">
//                                 {translate('or drag and drop here [.pdf]')}
//                             </p>
//                             {
//                                 acceptedFiles?.[0]?.name &&
//                                 <p className="font-[600] my-2 text-center text-[14px] text-green-500">
//                                     {acceptedFiles?.[0]?.name}
//                                 </p>
//                             }
//                         </div>

//                     </div>

//                     {
//                         error &&
//                         <p className="text-red-500 my-1 text-[14px] px-3">
//                             {error?.message}
//                         </p>
//                     }

//                 </section>
//             )}
//         />
//     );
// }


