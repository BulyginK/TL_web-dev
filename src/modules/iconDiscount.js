export const iconDiscount = () => {
    const rooms = document.querySelectorAll('.room');

    rooms.forEach((room) => {
        const roomReservedBlock = room.querySelector('.room__room-reserved-block');
        const iconDiscount = room.querySelector('.room__icon-discount');

        room.addEventListener('mouseenter', () => {
            if (roomReservedBlock.classList.contains('display-none')) {
                iconDiscount.classList.remove('room__icon-discount--hidden');
            }
        })
    })

    rooms.forEach((room) => {
        room.addEventListener('mouseleave', () => {
            const iconDiscount = room.querySelector('.room__icon-discount');

            iconDiscount.classList.add('room__icon-discount--hidden');
        })
    })    
}

export default iconDiscount