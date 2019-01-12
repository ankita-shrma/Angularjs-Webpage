var vapp=angular.module('vegapp',['ui.router'])
        .config(function($stateProvider)
                          { 
                           $stateProvider.caseInsensitiveMatch=true;
                             $stateProvider
                              .state('main',{
                                url:'',
                              templateUrl:'main.html',
                              controller:'mainitemcont'
                          })
                             $stateProvider
                              .state('login',{
                                 url:'/login',
                              templateUrl:'login.html'
                          })
                                 $stateProvider
                              .state('items',{
                                     url:'/items',
                              templateUrl:'items.html',
                              abstract:true
                          })
                            $stateProvider
                              .state('items.lifeline-vegetables',{
                                     url:'/lfeline-vegetables',
                              templateUrl:'lifeline-vegetables.html',
                                controller:'lifelinecont'
                          })
                            $stateProvider
                              .state('items.green-vegitables',{
                                     url:'/green-vegitables',
                              templateUrl:'green-vegitables.html',
                                controller:'greencont'
                          });
                          
        
        })
        .controller('mainitemcont',function($scope)
        {var mainimg=[{source:'lifeline-veggies.jpg',
                       title:'Lifeline Vegetables',
                       path:'items.lifeline-vegetables'
                      },
                      {source:'green-veggies.jpg',
                       title:'Green Vegetables',
                        path:'items.green-vegitables'
                      },
                      {source:'green-veggies2.jpg',
                       title:'Green Vegetables2',
                        path:'items.lifeline-vegetables'
                      },
                      {source:'chutney.jpg',
                       title:'Chutney Items',
                        path:'items.lifeline-vegetables'
                      }
                     ];
           $scope.mainimg=mainimg; 
        })
        .controller('lifelinecont',function($scope)
        {var limgs=[{lsource:'onion.gif',
                       ltitle:'Onion-500g',
                       lrate:'Rs. 10.00'
                      },
                      {lsource:'tomato.gif',
                       ltitle:'Tomato-500g',
                         lrate:'Rs. 15.00'
                      },
                      {lsource:'potato.gif',
                       ltitle:'Potato-500g',
                       lrate:'Rs. 10.00'
                      }
                    ];
             $scope.limgs=limgs;
        })
           .controller('greencont',function($scope)
        {var gimgs=[{gsource:'onion.gif',
                       gtitle:'Onion-500g',
                       grate:'Rs. 10.00'
                      },
                      {gsource:'tomato.gif',
                       gtitle:'Tomato-500g',
                         grate:'Rs. 15.00'
                      },
                      {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                         {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                    
                      {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                    
                      {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                    
                      {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                      {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                        {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                        {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                        {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      },
                      {gsource:'potato.gif',
                       gtitle:'Potato-500g',
                       grate:'Rs. 10.00'
                      }
                     ];
             $scope.gimgs=gimgs;
        });