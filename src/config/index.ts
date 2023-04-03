interface Button {
    name: string;
    url: string;
}

interface Config {
    logoText: string;
    logoSubtext: string;
    operationText: string;
    websiteFilingNumber: string;
    buttonList: Button[];
}

export const config: Config = {
    logoText: 'logoText',
    logoSubtext: 'For you Thousands Times',
    operationText: 'operationText',
    websiteFilingNumber: 'xICP备2021000000号',
    buttonList: [
        {
            name: '百度',
            url: 'https://baidu.com',
        }
    ]
}
