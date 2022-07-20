export const iconDiscount = () => {
    const rooms = document.querySelectorAll('.room');

    rooms.forEach((room) => {
        const roomReservedBlock = room.querySelector('.room__room-reserved-block');
        const iconDiscount = room.querySelector('.room__icon-discount');

        room.addEventListener('mouseover', () => {
            if (roomReservedBlock.classList.contains('display-none')) {
                iconDiscount.classList.remove('room__icon-discount--hidden');
            }
        })
    })

    rooms.forEach((room) => {
        room.addEventListener('mouseout', () => {
            const iconDiscount = room.querySelector('.room__icon-discount');

            iconDiscount.classList.add('room__icon-discount--hidden');
        })
    })

    
}

export default iconDiscount