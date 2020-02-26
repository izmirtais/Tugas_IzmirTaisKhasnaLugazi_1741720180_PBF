import React from 'react';
import './StateFullComponent.css'

class StateFullComponent extends React.Component
{
    render() {
        return (
            <div>
                <h2 className='tulisan-form'>Form Login</h2>
                <div className='card'>
                <div className='tulisan-form'>
                    <h1>Tugas Pertemuan Keempat</h1>
                    <form>
                    <label className='tulisan'><b>Username</b></label>
                        <input
                            className="form-item"
                            placeholder="Masukkan Username"
                            name="username"
                            type="text"
                        />

                    <label className='tulisan'>Password</label>
                        <input
                            className="form-item"
                            placeholder="Masukkan Password"
                            name="password"
                            type="password"
                        />
                        
                        <input
                            className="form-submit"
                            value="Login"
                            type="submit"
                        />
                        <div className='tulisan-form'>
                        <span id="loginCheck">
                            <input type="checkbox" id="rememberMe"/>
                                <label for="rememberMe">Remember Me</label>
                        </span>
                        </div>
                        <div className='border'>
                        <div className='tulisan-form'>
                        <input
                            className="form-cancel"
                            value="Cancel"
                            type="submit"
                        />
                        </div>
                        </div>
                        <div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default StateFullComponent;
