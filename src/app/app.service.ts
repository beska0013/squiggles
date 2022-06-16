import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  blogList:IBlog[] = [
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',

      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
       text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
       text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
       text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
       text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.',
       text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisi ' +
        'diam dui amet vel amet odio ut vel.' +
        ' Risus diam ante dui arcu, scelerisque aenean. Sed pharetra, ' +
        'iaculis hendrerit amet turpis adipiscing nulla in. Enim et sit mauris ' +
        'convallis vulputate eget. Nibh risus pretium dolor faucibus sit aliquam ' +
        'vulputate neque.',

        'Ut amet quam posuere elit et amet aenean nam integer. Urna amet sagittis' +
        ' mus scelerisque consectetur eu enim, id. Ac pulvinar donec nunc enim pharetra,' +
        ' vel mi. Cras magnis posuere vitae, consectetur. Nibh bibendum risus morbi vel ' +
        'in nisi. Commodo sed dolor, lacus lacus a aliquam eu scelerisque. Diam tellus ' +
        'vulputate mattis eget. Fermentum, ac accumsan sed nunc. Phasellus elementum ' +
        'viverra tempor donec ornare ac parturient suspendisse. Tortor suspendisse ' +
        'fermentum ullamcorper fringilla. Pharetra sit cursus vel mauris magna risus,' +
        ' gravida scelerisque risus. Sed a faucibus quis massa sed dignissim aliquam.' +
        ' In arcu tortor et tempor mauris augue sagittis. Fermentum massa erat dolor quis.',

        'Eget quisque non vitae purus, pretium etiam viverra placerat vestibulum.' +
        ' Ultrices eget vivamus commodo accumsan risus ipsum blandit. ' +
        'At erat lectus in tortor aliquet imperdiet sit amet. Et proin nunc,' +
        ' ut magna elementum augue pulvinar at. At pellentesque nullam elementum' +
        ' nulla massa. Nec phasellus eget quis ultrices. Lectus adipiscing ' +
        'pellentesque sodales nulla lobortis suspendisse enim in at. Ut enim,' +
        ' purus a amet suscipit ultrices. Nullam ipsum rhoncus purus blandit id ' +
        'platea amet mauris in. Non vulputate habitant rhoncus sed. Eget ipsum ' +
        'eget phasellus quam adipiscing. Sit fringilla diam ullamcorper sed at' +
        ' maecenas cras risus nunc.',


      ]
    },
  ]

  getBlogs = ():Observable<IBlog[]> => of(this.blogList)

}

export interface IBlog{
  img:string;
  title: string;
  content: string;
  text?: string[];
}
