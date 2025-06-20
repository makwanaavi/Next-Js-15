import React from 'react'

async function Products({ searchParams }) {
    // Use searchParams directly, no need to await
    const category = searchParams?.category || "all"
    const sort = searchParams?.sort || "default"
    const page = searchParams?.page || 1

    console.log(category, sort, page)
    return (
        <div>
            Products Category : {category}, Sorting :{sort}, PageNo. : {page}
        </div>
    )
}

export default Products
