import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setUser, setUserNameByEmail } from '../../redux/action'
import * as api from '../../api'
import './Auth.css'
import { getNameByEmail } from '../../helper'

const Auth = ({
    signIn, signUp
}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] =useState(false)

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const fetchNewUser = async () => {
            setLoading(true)
            const result = await api.signUp({email, password})
            const post = await api.postData({name, email, password})
            const saved = await api.getData()
           
            if(result && post && saved) {
                dispatch(setUser(result.idToken))
                dispatch(setUserNameByEmail(getNameByEmail(saved, email)))
                history.push('/main')
            } else {
                setLoading(false)
                setError(true)    
            }
        }
        
        const fetchExistUser = async () => {
            setLoading(true)
            const result = await api.signIn({email, password})
            const saved = await api.getData()

            if(result && saved) {
                dispatch(setUser(result.idToken))
                dispatch(setUserNameByEmail(getNameByEmail(saved, email)))
                history.push('/main')
            } else {
                setLoading(false)
                setError(true)             
            }
            
       }

        signIn && fetchExistUser()
        signUp && fetchNewUser() 
    }

    return (
        <section>
            <div className="auth">
                <div className="auth-container">
                    <h3 className="auth-header">
                        {
                        (signIn && <span>Войдите в учетную запись Udemy!</span>) 
                        || 
                        (signUp && <span>Зарегистрируйтесь и начните обучение!</span>)
                        }
                    </h3>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        {error && 
                            (<div className="form-alert">
                                При входе произошла ошибка. Проверьте введенный адрес электронной почты и пароль либо создайте учетную запись.
                            </div>)
                        }
                        {signUp && 
                            (<div className="form-control">
                                <input className="auth-input" 
                                        placeholder="Полное имя" 
                                        name="name" 
                                        type="text" 
                                        autoComplete="off" 
                                        required 
                                        maxLength="40"
                                        onChange={(e) => setName(e.target.value)} />
                                <i className="fas fa-user"></i>
                            </div>)
                        }
                        <div className="form-control">
                            <input className="auth-input" 
                                    placeholder="Адрес электронной почты" 
                                    name="email"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setEmail(e.target.value)} />
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="form-control">
                            <input className="auth-input" 
                                    placeholder="Пароль" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="off" 
                                    minLength="6"
                                    required
                                    onChange={(e) => setPassword(e.target.value)} />
                            <i className="fas fa-lock-alt"></i>
                        </div>
                        <div className="form-control">
                            {!loading && 
                                (<button className="auth-btn" type="submit">
                                    {
                                    (signIn && <span>Вход</span>) 
                                    || 
                                    (signUp && <span>Зарегистрироваться</span>)
                                    }
                                </button>)
                            }
                            {loading && 
                                (<button className="auth-btn-loading" type="button">
                                    <span>Загрузка...</span>
                                </button>)
                            }
                        </div>
                    </form>
                    <div className="auth-footer">
                        {
                        (signIn && <p>Не зарегистрированы? <Link to="/sign-up">Регистрация</Link></p>) 
                        || 
                        (signUp && <p>Уже зарегистрировались? <Link to="/sign-in">Вход</Link></p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Auth }