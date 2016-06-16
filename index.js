import {ReactiveVar} from 'meteor/reactive-var';
import {Blaze} from 'meteor/blaze';

/**
 * Adds bucket to current template
 * @param bucket
 * @param callback {function|boolean} callback or true for reactive subscription
 * @returns {*}
 */
Blaze.Template.prototype.attachBucket = function attachBucket (bucket, callback) {
    attachBucketToTemplate(this, bucket, callback);
};

/**
 * Attaching bucket to template
 * @param template {Blaze.Template}
 * @param bucket object of Bucket
 * @param callback {function=} custom way to provide bucket handler.
 * In this function (templateData, Bucket) you can make yourself subscribing
 * @returns {{getDocs, getDoc, getCount, ready, subscriptionId, subscriptionHash, isStatic}}
 */
export default function attachBucketToTemplate (template, bucket, callback) {
    if (!template || !(template instanceof Blaze.Template)) {
        throw new Error('Template must be instance of Blaze.Template (a true template)');
    }
    template.onCreated(function () {
        const reactiveHandler = new ReactiveVar();

        Object.defineProperty(this, bucket._name, {
            get: reactiveHandler.get.bind(reactiveHandler),
            set: reactiveHandler.set.bind(reactiveHandler)

        });

        Tracker.autorun(() => {
            Tracker.nonreactive(() => {
                const oldBucket = reactiveHandler.get();
                if (oldBucket && oldBucket.stop) {
                    oldBucket.stop();
                }
            });

            if (typeof callback === 'function') {
                const resHandl = callback.call(this, Template.currentData(), bucket);
                if (!resHandl.getDocs || !resHandl.stop) {
                    throw new Error('Bucket handler was expected...');
                }
                reactiveHandler.set(resHandl);
                return;
            }
            if (callback === true) {
                reactiveHandler.set(bucket.subscribe(Template.currentData()));
                return;
            }
            reactiveHandler.set(bucket.load(Template.currentData()));
        });
    });

    template.helpers({
        [bucket._name] () {
            const {getDocs, getDoc, getCount, ready, subscriptionId, subscriptionHash, isStatic}
                = Template.instance()[bucket._name] || {};
            return {getDocs, getDoc, getCount, ready, subscriptionId, subscriptionHash, isStatic};
        }
    });

    template.onDestroyed(function () {
        if (this[bucket._name] && this[bucket._name].stop) {
            this[bucket._name].stop();
        }
    });
}
