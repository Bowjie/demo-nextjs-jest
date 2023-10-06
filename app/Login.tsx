import Image from 'next/image';
import { useState, FormEvent } from 'react';

export default function Login({ onLogin }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [yearToday] = useState(new Date().getFullYear());

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email && password) {
      if (email === 'demo@mail.com' && password === 'test') {
        onLogin('success');
      } else {
        onLogin('failed');
      }
    } else {
      onLogin('requiredFields');
    }
  };

  return (
    <section className='container login-container'>
      <div className='row justify-content-center'>
        <div className='col-4'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                <Image src='/lps.png' alt='Lenovo PCCW Solutions' className='img-fluid' width={300} height={0} style={{ height: 'auto !important' }} priority />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='card shadow'>
                <div className='card-body'>
                  <form onSubmit={handleSubmit} autoComplete='on'>
                    <div className='mb-3'>
                      <div className='MatFormContainer'>
                        <input data-testid='testid-email' className='form-control' type='email' id='email' placeholder='Email' value={email} onChange={onChangeEmail} />
                        <label htmlFor='email'>Email</label>
                        <fieldset className='MatControlFieldset'>
                          <legend className='MatControlLegend'>
                            <span className='MatLabelHolder'>Email</span>
                          </legend>
                        </fieldset>
                      </div>
                      <div className='invalid-feedback'></div>
                    </div>

                    <div className='mb-3'>
                      <div className='MatFormContainer'>
                        <input
                          data-testid='testid-password'
                          className='form-control'
                          type='password'
                          id='password'
                          placeholder='Password'
                          autoComplete='on'
                          value={password}
                          onChange={onChangePassword}
                        />
                        <label htmlFor='email'>Password</label>
                        <fieldset className='MatControlFieldset'>
                          <legend className='MatControlLegend'>
                            <span className='MatLabelHolder'>Password</span>
                          </legend>
                        </fieldset>
                      </div>
                      <div className='invalid-feedback'></div>
                    </div>

                    <button type='submit' className='btn btn-primary w-100'>
                      Sign in
                    </button>
                    <div className='mt-3 text-center'>
                      <a href='#' className='text-primary'>
                        Forgot password
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              <div className='mt-2 text-center'>
                <small>© Lenovo PCCW Solutions Limited {yearToday}. All Rights Reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
