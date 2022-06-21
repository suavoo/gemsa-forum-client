import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faRegistered } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppState } from "../../store/AppState"
import { UserProfileSetType } from "../../store/user/Reducer"
import './SideBarMenus.css'
import Registration from "../auth/Registration"


const SideBarMenus = () => {
    const [showRegister, setShowRegister] = useState(false)
    const user = useSelector((state: AppState) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: 'testUser'
            }
        })
    }, [dispatch])

    const onClickToggleRegister = () => {
        setShowRegister(!showRegister)
    }

    return (
        <React.Fragment>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">{user?.userName}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span className="menu-name" onClick={onClickToggleRegister}>register</span>
                    <Registration isOpen={showRegister} onClickToggle={onClickToggleRegister} />
                </li>
            </ul>
        </React.Fragment>
    )

}

export default SideBarMenus
