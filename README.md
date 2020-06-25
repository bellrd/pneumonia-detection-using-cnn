## Pneumonia detection using cnn. (Final sem project)

Deployed on heroku as [pneumonia-detection-using-cnn](http://penumonia-detection-using-cnn.heroku.com)


### Frontend (Interface)
Check inside frontend folder. 

### How to setup

*Make sure requirements.txt has following line*

**fastai**

>https://download.pytorch.org/whl/cpu/torch-1.5.0%2Bcpu-cp38-cp38-linux_x86_64.whl

>https://download.pytorch.org/whl/cpu/torchvision-0.6.0%2Bcpu-cp38-cp38-linux_x86_64.whl

* Install dependencies from `requirements.txt`.
* Review `config.py`
* Add following environment variable 
    * `export APP_SETTINGS=config.DevelopementConfig`  *Other options are, config.ProductionConfig. **Check config.py***
    * `export FLASK_APP=app.py` 
    * `export DATABASE_URL=your_database_uri`



 






