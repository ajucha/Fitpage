import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function FilterComponent({ data }) {
    const location = useLocation()
    let words = data.text.split(/\s+/);
    let variable = data.variable
    return (
        < >
            {words.map((word, id) => {
                if (word.startsWith("$")) {
                    const key = word;
                    if (variable[key]) {
                        return (
                            <Link
                                to={`${location.pathname.replace(/[\s+]/g, "_")}/${id}`}
                                key={word}
                                state={variable[key]}
                                style={{ color: 'blue' }}
                            >
                                ({variable[key]?.default_value ??
                                    variable[key]?.values[0] ??
                                    ""})
                            </Link>
                        );
                    } else {
                        return (
                            <React.Fragment key={word}>
                                {word}
                            </React.Fragment>
                        );
                    }
                } else {
                    return (
                        <React.Fragment> {word} </React.Fragment>
                    );
                }
            })}
        </>
    );
}
