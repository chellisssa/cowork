export interface FooterItem {
    id: number,
    title: string,
    url: string,
}

export interface FooterColumn {
    id: number,
    title: string,
    items: FooterItem[],
}