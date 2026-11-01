import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext"

function Login () {

    const {changeUser}=useContext(UserContext);
    const redirect = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const showData = (data) => {
      changeUser(data);
      redirect('/');
    };
    
    return (
        <>
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(showData)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <fieldset className="fieldset">
                <label className="label" htmlFor="nome">Nome</label>
                <input type="text" className="input validator" placeholder="Mario" id="nome" {...register('nome', {required: "Campo obbligatorio", maxLength: {value: 50, message: "Inserire massimo 50 caratteri!"}})}/>
                {errors.nome && <p role="alert" className="underline" >{errors.nome.message}</p>}
              </fieldset>

              <label className="fieldset">
                <span className="label" htmlFor="pass">Password</span>
                <input type="password" className="input validator" id="pass" {...register('password', {required: "Campo obbligatorio", minLength: {value: 8, message: "Necessari almeno 8 caratteri"}, maxLength: {value: 50, message: "Inserire massimo 50 caratteri!"}})} />
                {errors.password && <p role="alert" className="underline">{errors.password.message}</p>}
              </label>

              <button className="btn btn-neutral mt-4" type="submit">Login</button>
              <button className="btn btn-ghost mt-1" type="reset">Reset</button>
            </form>  
        </div>
        </>
    )
}

export default Login