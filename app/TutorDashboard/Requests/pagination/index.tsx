import { FC } from 'react'

type PaginationProps = {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className='flex items-center justify-center mt-4'>
      <button
        className={`${
          currentPage > 1 && 'hover:bg-[#f1f5f9] hover:text-black'
        }  w-9 h-9 rounded-full flex items-center justify-center`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </button>

      <div className='flex mx-2'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`p-2 rounded-full border w-9 flex items-center justify-center h-9 mx-1 ${
              currentPage === page ? 'bg-black text-[#FFC130]' : ''
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`${
          currentPage !== totalPages && 'hover:bg-[#f1f5f9]  hover:text-black'
        }  w-9 h-9 rounded-full flex items-center justify-center`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
