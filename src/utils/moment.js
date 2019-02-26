const ONEDAYPARSETIME = 24 * 60 * 60 * 1000;

export class Moment {
  // IOS 处理 1992-10-10 为 Invalid Date，转换为 1992/10/10
  // 此 BUG 微信7.0 无？？？
  // static fixIOSBug(date){
  //   return date.replace(/-/g, '/');
  // }

  // 不足10，添加0
  static formatNumber(n){
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  // 输出 [yy, mm, dd, HH, MM, SS]
  static splitDate(date){
    date = new Date(date);
    return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ]
  }

  // 输出 yy/mm/dd HH:MM:SS
  static formatToYMD(date, type){
    const [yy, mm, dd, HH, MM, SS] = this.splitDate(date);
    switch (type){
      case 'yy/mm/dd':
        return [yy, mm, dd].map(this.formatNumber).join('/');
      break;
      case 'mm/dd':
        return [mm, dd].map(this.formatNumber).join('/');
      break;
      default:
        return [yy, mm, dd].map(this.formatNumber).join('/') + ' ' + [HH, MM, SS].map(this.formatNumber).join(':');
      break;
    } 
  }

  static getNextXDate(date, x = 1){
    date = new Date(date);
    return new Date(date.getTime() + ONEDAYPARSETIME * x);
  }

  static getIntervalDay(d1, d2){
    return Math.floor((new Date(d2) - new Date(d1)) / ONEDAYPARSETIME);
  }

  static getWeekDay(dateString){
    let date = new Date(dateString);
    //var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
    //return "星期" + weeks[date.getDay()];
    return "日一二三四五六".charAt(date.getDay());
  }
}