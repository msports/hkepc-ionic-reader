/**
 * Created by Gaplo917 on 11/1/2016.
 */
import * as HKEPC from '../../data/config/hkepc'
import * as URLUtils from '../../utils/url'
import {GeneralHtml} from '../model/general-html'
import {CommonInfoExtractRequest} from '../model/CommonInfoExtractRequest'
import {PushHistoryRequest} from '../model/PushHistoryRequest'
import * as Controllers from './index'

const cheerio = require('cheerio')
const async = require('async')

/**
 * Just a Clone Controller for display in features tab
 */
export class ViewPostListController extends Controllers.PostListController {
  static get STATE() { return 'tab.features-posts'}
  static get NAME() { return 'ViewPostListController'}
  static get CONFIG() { return {
    url: '/features/topics/:topicId/page/:page',
    views: {
      'tab-features': {
        templateUrl: 'templates/topic-posts.html',
        controller: ViewPostListController.NAME,
        controllerAs: 'vm'
      }
    }
  }}
  constructor($scope,$http,$state,$stateParams,$location,$ionicScrollDelegate,$ionicSlideBoxDelegate,$ionicHistory,$ionicPopover,LocalStorageService,$ionicModal,ngToast,$q) {
    super($scope,$http,$state,$stateParams,$location,$ionicScrollDelegate,$ionicSlideBoxDelegate,$ionicHistory,$ionicPopover,LocalStorageService,$ionicModal,ngToast,$q)
  }

  onBack(){
    const history = this.ionicHistory.viewHistory()
    if(history.backView){
      this.ionicHistory.goBack()
    } else {
      this.state.go(Controllers.TopicListController.STATE)
    }
  }

}
