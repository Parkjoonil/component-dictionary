import { MenuInfo } from "./menu.component";

export const menuList: MenuInfo[] = [
    {
        category: 'product',
        name: '상품',
        items: [
            {
                icon: 'ic_dotted.svg',
                name: '상품 관리',
                href: '/product',
            },
            {
                icon: 'ic_dotted.svg',
                name: '예약 관리',
                href: '/reservation',
            },
            {
                icon: 'ic_dotted.svg',
                name: '예약자 관리',
                href: '/consumer',
            },
            {
                icon: 'ic_dotted.svg',
                name: '알림 관리',
                href: '/notification',
            },
            {
                icon: 'ic_dotted.svg',
                name: '결제 관리',
                href: '/meeting',
            }
        ]
    },
    {
        category: 'etc',
        name: '기타',
        items: [
            {
                icon: 'ic_dotted.svg',
                name: '가이드 관리',
                href: '/guide',
            },
            {
                icon: 'ic_dotted.svg',
                name: '짐꾸리기 관리',
                href: '/packing',
            },
            {
                icon: 'ic_dotted.svg',
                name: '직원 관리',
                href: '/manager',
            },
            {
                icon: 'ic_dotted.svg',
                name: '출입국신고서 관리',
                href: '/arrivalcard',
            }
        ]
    },
    {
        category: 'contents',
        name: '컨텐츠',
        items: [
            {
                icon: 'ic_dotted.svg',
                name: '국가 관리',
                href: '/country',
            },
            {
                icon: 'ic_dotted.svg',
                name: '도시 관리',
                href: '/city',
            },
            {
                icon: 'ic_dotted.svg',
                name: '공항 관리',
                href: '/airport',
            },
            {
                icon: 'ic_dotted.svg',
                name: '호텔 관리',
                href: '/hotel',
            },
        ]
    }
]