import FormLogin from "./FormLogin";

function Login() {
  return (
    <>
      <FormLogin
        customClass="borderLogin"
        register="Criar Conta"
        passForgot="Recuperar Conta"
      ></FormLogin>
    </>
  );
}
export default Login;
