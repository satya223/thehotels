
import { NgModule } from '@angular/core';

import {MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
} from '@angular/material';


@NgModule ({
    imports: [MatButtonModule,
              MatToolbarModule,
              MatBadgeModule,
              MatIconModule,
              MatSidenavModule,
              MatListModule,
              MatTabsModule
    ],
    exports: [ MatButtonModule,
                MatToolbarModule,
                 MatIconModule,
                MatBadgeModule,
                MatIconModule,
                MatSidenavModule,
                MatListModule,
                MatTabsModule
    ]
})

export class MaterialModule {}
