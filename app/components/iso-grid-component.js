import Ember from 'ember';

export default Ember.Component.extend({
  // ages: [],
  actions: {
    addAge: function () {
      let ageName = 'new age';
      this.get('ages').pushObject(ageName);

        Ember.run.sync();
        Ember.run.next(this, function() {
          this.$('.isoGrid').isotope( 'appended', this.$('.isotopePoep:not(.wasInserted)') );
          this.$('.isotopePoep').addClass('wasInserted')
          // this.$('.isoGrid').isotope('destroy')
          this.$('.isoGrid').isotope('destroy')
          this.$('.isoGrid').isotope()
        });
        // Ember.run.sync();

    }

  },

  didInsertElement: function () {
    console.log('hey')
    this.$('.isotopePoep').addClass('wasInserted')
    this.$('.isoGrid').isotope()
  }

});
