/* eslint-disable no-useless-escape */
import * as Yup from "yup";



// validation for user sign up
export const RegisterValidation = Yup.object({
    name: Yup.string()
        .min(3)
        .max(30)
        .matches(/^[^\s]+(\s[^\s]+)*$/, "Name cannot have adjacent spaces")
        .required("Please enter name"),
    email: Yup.string()
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com$/, "Enter a valid email")
        .required("Please enter email"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/^[^\s]+$/, "Password cannot contain spaces")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
        )
        .required("Please enter password"),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password not matched")
        .required("Please enter confirmpassword"),
});



// validation for user sign In
export const LoginValidation = Yup.object({

    email: Yup.string()
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com$/, "Enter a valid email")
        .required("Please enter email"),
    password: Yup.string()

        .required("Please enter password"),
});


export const AddBooksValidation = Yup.object({

    title: Yup.string()
        .min(3)
        .max(30)
        .matches(/^[^\s]+(\s[^\s]+)*$/, "Name cannot have adjacent spaces")
        .required("Please enter title"),

    author: Yup.string()
        .min(3)
        .max(30)
        .matches(/^[^\s]+(\s[^\s]+)*$/, "Name cannot have adjacent spaces")
        .required("Please enter author"),

    copies: Yup.number()
        .positive("Number of copies must be greater than 0")
        .required("Please enter number of copies")
})


