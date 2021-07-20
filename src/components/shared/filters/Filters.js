import React from 'react'
import { FiltersEvents } from './filtersEvents/FiltersEvents'
import { FiltersUsers } from './filtersUsers/FiltersUsers'

export const Filters = () => {
    return (
        <div className="p-3 pb-4 d-flex flex-column">

            <FiltersEvents />
            {/* <FiltersUsers /> */}
        </div>
    )
}
