import React from 'react'

const TextareaField = ({ value, onChange, name, label }) => {
    return (
        <div>
          <label>
            {label}
            <textarea
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
    )
}

function FormField({ value, onChange, name, type, label }) {
    if (type === 'textarea') {
        return <TextareaField 
            name={name} 
            value={value}
            label={label} onChange={onChange}/>
    }

    return (
        <div>
          <label>
            {label}
            <input
              name={name}
              value={value}
              onChange={onChange}
              type={type}
            />
          </label>
        </div>
    )
}

export default FormField
