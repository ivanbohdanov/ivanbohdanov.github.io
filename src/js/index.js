import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

import github from '~icons/cib/github';
import linkedin from '~icons/cib/linkedin';
import twitter from '~icons/cib/twitter';
import gmail from '~icons/cib/gmail';

document.addEventListener('DOMContentLoaded', () => {
    const icons = {
        github,
        linkedin,
        twitter,
        gmail,
    };

    const socialLinks = document.querySelectorAll('.social__link');

    socialLinks.forEach((item) => {
        item.innerHTML = icons[item.dataset.icon];
    });

    document.querySelector('.projects-list__link').innerHTML = github;
});