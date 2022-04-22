import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  className = 'timelineItem';
  alternClassName = 'timelineItemAltern';
  item1 = 'item1';
  item2 = 'item2';
  item3 = 'item3';
  image1 = 'image1';
  image2 = 'image2';
  image3 = 'image3';
  navPicArray = [
    '../../assets/icons/explosionIcon.webp',
    '../../assets/icons/lockdownIcon.webp',
    '../../assets/icons/rainIcon.webp',
  ];
  picArray = [
    '../../assets/img/beirutExplosion.jpg',
    '../../assets/img/security.jpg',
    '../../assets/img/autumn.jpg',
  ];
  headlineArray = [
    'انفجار ٤ آب',
    'الإقفال العام في لبنان بسبب جائحة كورونا: ',
    'الشتاء في المخيّمات',
  ];
  textContentArray = [
    'بعد لجوئهم إلى لبنان بحثًا عن مكان يحميهم من الحرب والخطر، شهد النازحون السوريون، إلى جانب المواطنين اللبنانيين، انفجارًا دمّر العاصمة بيروت. فكان من نصيب السوريين ثاني أكبر عدد من الخسائر البشرية بعد اللبنانيين بطبيعة الحال. ',
    'كان للوباء المنتشر في ٢٠٢٠ تأثيره على صحة الناس النفسية في العالم أجمع.  وضاعف الاقفال العام من وزر الاوضاع النفسية الصعبة التي يمر بها النازحون في لبنان ليزيد الطين بلة. ',
    'يحلّ الشتاء كل سنة على المخيّمات مثل لعنة لا مفر منها. فتتساقط الثلوج وتتراكم  على أسطح الخيّم الهشة، لاسيما في عرسال، البقاع. علمًا أن خيام النازحين تفتقر إلى الحد الأدنى من مقوّمات الجهوزية للعواصف.'
  ];
  constructor() {}

  ngOnInit(): void {}
}
