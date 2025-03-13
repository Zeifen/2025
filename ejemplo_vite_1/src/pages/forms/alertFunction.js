import Swal from 'sweetalert2';

export const alertFunction = (text, icon, title) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text
        });
}