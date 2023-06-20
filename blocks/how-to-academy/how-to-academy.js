import { getLibs } from '../../scripts/utils.js';
import(`${getLibs()}/utils/utils.js`);

export default async function init(elem) {
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    console.log('ele', elem);
    console.log('ele firstChild', elem.firstChild.innerText);

}