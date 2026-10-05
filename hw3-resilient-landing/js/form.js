const form =
    document.querySelector('#signup-form');

const emailInput =
    document.querySelector('#email');

const submitButton =
    form.querySelector('button[type="submit"]');

const message =
    document.querySelector('#form-message');


let state = 'idle';


function renderState() {
    switch (state) {

        case 'idle':
            submitButton.textContent = 'Notify Me';
            message.textContent = '';
            break;


        case 'submitting':
            submitButton.textContent = 'Submitting...';
            message.textContent = 'Submitting your request...';
            break;


        case 'success':
            submitButton.textContent = 'Notify Me';
            message.textContent = 'Subscription successful.';
            break;


        case 'error':
            submitButton.textContent = 'Try Again';
            message.textContent = 'Something went wrong.';
            break;

    }
}


function submitSignup(email) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (email.includes('fail')) {
                reject(new Error('Simulated request failure'));
                return;
            }

            resolve();

        }, 1000);

    });
}


renderState();


form.addEventListener('submit', async (event) => {

    event.preventDefault();

    const email = emailInput.value;

    state = 'submitting';

    renderState();


    try {

        await submitSignup(email);

        state = 'success';

    } catch (error) {

        state = 'error';

    }


    renderState();

});