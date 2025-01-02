import { LightningElement, api } from 'lwc';

export default class GoogleCloudAttachments extends LightningElement {
    @api title;
    @api myString;
    @api backgroundColor;

    @api records = [
        {
            id: '1',
            name: 'Shared',
            date: '2 Jan 2025',
            size: '6KB',
            type: 'docx',
            link: '#'
        },
        {
            id: '2',
            name: 'Test',
            date: '27 Dec 2024',
            size: '11KB',
            type: 'docx',
            link: '#'
        },
        {
            id: '3',
            name: 'to_upload',
            date: '18 Oct 2024',
            size: '285KB',
            type: 'docx',
            link: '#'
        },
        {
            id: '4',
            name: 'right_size_preview',
            date: '2 Jan 2025',
            size: '423KB',
            type: 'jpg',
            link: '#'
        },
        {
            id: '5',
            name: 'photo_5406628952920942427_y',
            date: '27 Dec 2024',
            size: '191KB',
            type: 'jpg',
            link: '#'
        }
    ];
}