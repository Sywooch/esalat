<?php

namespace app\modules\managment\models;

use app\modules\catalog\models\Goods;
use Yii;
use yii\behaviors\TimestampBehavior;
use yii\behaviors\BlameableBehavior;
/**
 * This is the model class for table "shops".
 *
 * @property integer $id
 * @property string $name
 * @property integer $comission_id
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $created_user
 * @property integer $updated_user
 * @property integer $status
 *
 * @property UsersRoles[] $usersRoles
 */
class ShopGroup extends \app\modules\common\models\ActiveRecordRelation
{
    public function behaviors()
    {
        return [
            TimestampBehavior::className(),
            [
                'class' => BlameableBehavior::className(),
                'createdByAttribute' => 'created_user',
                'updatedByAttribute' => 'updated_user',
            ],
        ];
    }
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'shop_group';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['comission_id','created_at', 'updated_at', 'created_user', 'updated_user','status'], 'integer'],
            [['name'], 'required'],
            [['name'], 'string', 'min' => '3', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => Yii::t('admin','Название'),
            'comission_id' => Yii::t('admin','Тип комиссии'),
            'created_at' => 'Created',
            'updated_at' => 'Updated',
            'created_user' => 'Created User',
            'updated_user' => 'Updated User',
            'status' => Yii::t('admin','Активный'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getComissions()
    {
        return $this->hasOne(Comissions::className(), ['id' => 'comission_id']);
    }
    public function getComissionTitle()
    {
        $comission = $this->comissions;

        return $comission ? $comission->name : '';
    }

    public function getShopGroupRelated()
    {
        return $this->hasMany(ShopGroupRelated::className(), ['shop_group_id' => 'id']);
    }

    public function getShops()
    {
        return $this->hasMany(Shops::className(),['id' => 'shop_id'])
            ->viaTable(ShopGroupRelated::tableName(), ['shop_group_id' => 'id']);
    }


    public function getAllShopsQuery(){
        return Shops::find()->leftJoin('shops_group_related','shops_group_related.shop_id = shops.id')->where(['shops_group_related.shop_group_id' => $this->id]);
    }

//    public function getStores(){
//        return $this->hasMany(ShopsStores::className(),[])
//            ->viaTable(Shop);
//    }

    public function getProducts(){
        return $this->hasMany(Goods::className(), ['id' => 'product_id'])
            ->viaTable('shop_group_variant_link', ['shop_group_id' => 'id']);
    }

    public function afterSave($insert, $changedAttributes)
    {
        parent::afterSave($insert, $changedAttributes); // TODO: Change the autogenerated stub

        // Если группу магазинов отключили/удалили

//        if(!empty($changedAttributes['status'])) {
//            if (!$insert
//                && ($changedAttributes['status'] == 1
//                    && $this->status != 1)
//            ) {
//                $shops = $this->getAllShopsQuery();
//                $shops = $shops->all();
//                if (!$shops) {
//
//                } else {
//                    foreach ($shops as $shop) {
//                        $stores = $shop->getAllStoresQuery();
//                        $stores = $stores->all();
//                        if (!$stores) {
//
//                        } else {
//                            foreach ($stores as $store) {
//                                $store->removeAllCountItems();
//                            }
//                        }
//                    }
//                }
//            }
//        }
        // Если группу магазинов создали/включили
//        if(!empty($changedAttributes['status'])) {
//            if (($insert && $this->status == 1)
//                || ($changedAttributes['status'] != 1 && $this->status == 1)
//            ) {
//                $shops = $this->getAllShopsQuery();
//                $shops = $shops->all();
//                if (!$shops) {
//
//                } else {
//                    foreach ($shops as $shop) {
//                        $stores = $shop->getAllStoresQuery();
//                        $stores = $stores->all();
//                        if (!$stores) {
//
//                        } else {
//                            foreach ($stores as $store) {
//                                $store->setAllCountItems();
//                            }
//                        }
//                    }
//                }
//            }
//        }
    }
}