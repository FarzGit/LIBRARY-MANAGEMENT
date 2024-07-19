import { TextField, Button, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AddBooksValidation } from '../../../validations/yupValidation';
import axios from 'axios';


let BASE_URL = 'http://localhost:5000/api/admin'

const AddFrom = () => {


    const navigate = useNavigate()
    

    const initialValues = {
        title: '',
        author: '',
        copies: '',
    }

    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: AddBooksValidation,

        onSubmit: async (values) => {

            try {
                console.log('values',values)
                const {title,author,copies} =values
                const res = await axios.post(`${BASE_URL}/books`,{title,author,copies})
                console.log(res)

                if(res){
                    toast.success(res.data.message)
                    navigate('/admin')
                }
                

            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message)
            }
        },

    })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                        required
                    />
                    {errors.title && touched.title && (
                        <div className="text-red-500 text-[12px]">{errors.title}</div>
                    )}
                    <TextField
                        label="Author"
                        variant="outlined"
                        name='author'
                        value={values.author}
                        onChange={handleChange}
                        required
                    />
                    {errors.author && touched.author && (
                        <div className="text-red-500 text-[12px]">{errors.author}</div>
                    )}
                    <TextField
                        label="Copies"
                        type="number"
                        variant="outlined"
                        name='copies'
                        value={values.copies}
                        onChange={handleChange}
                        required
                    />
                    {errors.copies && touched.copies && (
                        <div className="text-red-500 text-[12px]">{errors.copies}</div>
                    )}
                    <Button type="submit" variant="contained" color="primary">
                        Add
                    </Button>
                </Stack>
            </form>

        </>
    )
}

export default AddFrom