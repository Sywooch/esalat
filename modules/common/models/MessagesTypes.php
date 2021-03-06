<?php

namespace app\modules\common\models;

use Yii;

/**
 * This is the model class for table "messages_types".
 *
 * @property integer $id
 * @property string $title
 * @property integer $status
 *
 * @property Messages[] $messages
 */
class MessagesTypes extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'messages_types';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['status'], 'integer'],
            [['title'], 'string', 'max' => 128],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'status' => 'Status',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getMessages()
    {
        return $this->hasMany(Messages::className(), ['type_id' => 'id']);
    }
}
