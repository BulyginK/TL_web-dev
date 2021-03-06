export const reservedRoom = () => {
    const rooms = document.querySelectorAll('.room');
    const reservedButtons = document.querySelectorAll('.room__reserved-button');

    reservedButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const room = button.closest('.room');
            const priceBlock = room.querySelector('.room__price-block');
            const reservedBlock = room.querySelector('.room__room-reserved-block');
            const roomOverlay = room.querySelector('.room--overlay');

            button.classList.add('room__reserved-button--pressed');

            room.addEventListener('mouseleave', () => {
                if (reservedBlock.classList.contains('display-none') && button.classList.contains('room__reserved-button--pressed')) {
                    priceBlock.classList.add('display-none');
                    reservedBlock.classList.remove('display-none');
                    roomOverlay.classList.remove('display-none');
                }
            })
        })
    })

    rooms.forEach((room) => {
        room.addEventListener('click', () => {
            const button = room.querySelector('.room__reserved-button');
            const priceBlock = room.querySelector('.room__price-block');
            const reservedBlock = room.querySelector('.room__room-reserved-block');
            const roomOverlay = room.querySelector('.room--overlay');

            if (!reservedBlock.classList.contains('display-none')) {
                priceBlock.classList.remove('display-none');
                reservedBlock.classList.add('display-none');
                roomOverlay.classList.add('display-none');
                button.classList.remove('room__reserved-button--pressed');
            }
        })
    })
}

export default reservedRoom