import { FormEvent } from "react";


export const submitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

}
export const submitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

    const apiUrl = "http://localhost:8080/api/registration/";

     fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formData
    })
    .then(response => {
        console.log(response.status)
        if (response.status === 201) {
          console.log('Создан:', response.headers.get('Location'));
        } else if (!(response.status === 201)) {
          throw new Error('Код ошибки: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Успешно:', data);
      })
      .catch(error => {
        console.error('Возникла ошибка с регой:', error);
      });
}
 