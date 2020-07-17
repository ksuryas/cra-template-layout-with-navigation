import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncFirstPage = asyncComponent(() => import ('../components/Content/Home/Home'));
const asyncSecondPage = asyncComponent(() => import ('../components/Content/Second/Second'));
const asyncThirdPage = asyncComponent(() => import ('../components/Content/Third/Third'));
const asyncFrthPage = asyncComponent(() => import ('../components/Content/Fourth/Fourth'));
const asyncFfthPage = asyncComponent(() => import ('../components/Content/Fifth/Fifth'));
const async404Page = asyncComponent(() => import ('../components/UI/PageNotFound/PageNotFound'));

const cmp = [
    {name: asyncFirstPage, path:'/'},
    {name: asyncSecondPage, path:'/menu-item-2/'},
    {name: asyncThirdPage, path:'/menu-item-3/'},
    {name: asyncFrthPage, path:'/menu-item-4/'},
    {name: asyncFfthPage, path:'/menu-item-5/'},
    {name: async404Page, path: null}
];

export default cmp;