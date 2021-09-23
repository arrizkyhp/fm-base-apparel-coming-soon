import React from 'react'
import Button from './Button'

export default function FormEmail() {

    return (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    className={`form-control`}
                    placeholder="Email Address"
                    name="email"
                />
            <Button />
            </div>
        </form>
    )
}
